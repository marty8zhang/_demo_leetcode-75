$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

try
{
    . "$( $PSScriptRoot )\pre-flight-check.ps1" $args
}
catch
{
    Write-Error -Message $_ -ErrorAction Stop
}

$dirProblem = ".\src\$( $args[0] )"
$dirProblemCS = "$( $dirProblem )\csharp"
if (Test-Path -Path $( $dirProblemCS ))
{
    Write-Error -Message "Error: The C# projects directory already exists." -ErrorAction Stop
}

$dirSolutionCS = "$( $dirProblemCS )\Program"
$solutionTestsDir = "$( $dirSolutionCS ).Tests"
if ((Test-Path -Path $dirSolutionCS) -or (Test-Path -Path $solutionTestsDir))
{
    Write-Error -Message "Error: The directory(ies) ``$( $dirSolutionCS )`` and/or ``$( $solutionTestsDir )`` already exist(s)." -ErrorAction Stop
}

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Creating the C# projects..."

New-Item -Path $dirProblem -Name "csharp" -ItemType "directory"

if (!(Test-Path -Path "$( $dirProblem )\README.md"))
{
    New-Item -Path $dirProblem -Name "README.md"
}

dotnet new console -o $dirSolutionCS
dotnet new xunit -o $solutionTestsDir
dotnet add $solutionTestsDir reference $dirSolutionCS

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Adding C# unit testing dependencies..."

Push-Location $solutionTestsDir
dotnet add package FluentAssertions
Pop-Location

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Adding the newly created C# projects to the .NET solution..."

dotnet sln add $dirSolutionCS $solutionTestsDir

Write-Host -ForegroundColor Green -BackgroundColor Black "# Done!"
Write-Host -ForegroundColor Magenta -BackgroundColor Black "# Re-opening the solution (``LeetCode75.sln``) from the IDE might be needed.$( $PSStyle.Reset )"
