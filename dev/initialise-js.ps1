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
$dirProblemJS = "$( $dirProblem )\js"
if (Test-Path -Path $( $dirProblemJS ))
{
    Write-Error -Message "Error: The JavaScript project directory already exists." -ErrorAction Stop
}

Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Creating the JavaScript project..."

New-Item -Path $dirProblem -Name "js" -ItemType "directory"
if (!(Test-Path -Path "$( $dirProblem )\README.md"))
{
    New-Item -Path $dirProblem -Name "README.md" -ItemType "file"
}
New-Item -Path $dirProblemJS -Name "solution-1.js" -ItemType "file"
New-Item -Path $dirProblemJS -Name "solutions.test.js" -ItemType "file"
