Write-Host -ForegroundColor Yellow -BackgroundColor Black "# Pre-flight check..."

if (!(Test-Path -Path ".\package.json"))
{
    throw @"
Error: Please run this script from the project root.
Usage: dev\initialise-csharp.ps1 <subdirectory>.
Example: dev\initialise-csharp.ps1 1_merge-strings-alternately
"@
}

if (!$args[0])
{
    throw @"
Error: A subdirectory of a LeetCode problem should be provided.
Usage: dev\initialise-csharp.ps1 <subdirectory>.
Example: dev\initialise-csharp.ps1 1_merge-strings-alternately
"@
}
