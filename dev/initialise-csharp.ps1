Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Checking the folder structure..."

if (!(Test-Path -Path ".\package.json"))
{
    throw "Error: Please run this script from the project root. E.g., ``.\dev\initialise.ps1 1_merge-strings-alternately``."
}

$problemSubDir = $args[0]
if (!$problemSubDir)
{
    throw "Error: A subdirectory of a LeetCode problem should be provided."
}

$problemDir = ".\src\$( $problemSubDir )"
if (!(Test-Path -Path "$( $problemDir )\README.md"))
{
    throw "Error: Could not find the problem `README.md`. Either create the file or check if the provided path name is correct or not."
}

$solutionDir = ".\src\$( $problemSubDir )\csharp\Program"
$solutionTestsDir = "$( $solutionDir ).Tests"
if ((Test-Path -Path $solutionDir) -or (Test-Path -Path $solutionTestsDir))
{
    throw "Error: The directory(ies) ``$( $solutionDir )`` and/or ``$( $solutionTestsDir )`` already exist(s)."
}

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Creating C# projects..."

dotnet new console -o $solutionDir
dotnet new xunit -o $solutionTestsDir
dotnet add $solutionTestsDir reference $solutionDir

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Adding unit testing dependencies..."

Push-Location $solutionTestsDir
dotnet add package FluentAssertions
Pop-Location

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Adding the newly created projects to the solution..."

dotnet sln add $solutionDir $solutionTestsDir

Write-Host -ForegroundColor Green -BackgroundColor Black "# Done!"
Write-Host -ForegroundColor Magenta -BackgroundColor Black "# Remember to re-open the solution (`LeetCode75.sln`) in your IDE.$( $PSStyle.Reset )"
