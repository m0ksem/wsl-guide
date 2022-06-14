<template>
  <h1>Export</h1>

  <VaAlert>
    Reduce export size. Clean .cache, .npm, tmp, etc. then
    <a target="_blank" style="color: currentColor; text-decoration: underline;" href="https://stephenreescarter.net/how-to-shrink-a-wsl2-virtual-disk/">Shrink virtual disk</a>
  </VaAlert>

  <h5>Find distributive name</h5>
  <code class="code-snippet">
    wsl.exe --list
  </code>
  <h5>Export</h5>
  <code class="code-snippet">
    wsl.exe --export <b>DistributionName</b> <b>ExportedFileLocation</b>  </code>
  <ul>
    <li>DistributionName — use wsl --list --all to find DistributionName;</li>
    <li>ExportedFileLocation — file location like work.tar.gz;</li>
  </ul>

  <h1>Import</h1>
  <code class="code-snippet">
    wsl.exe --import <b>DistributionName</b> <b>InstallLocation</b> <b>ExportedFileLocation</b>
  </code>
  <ul>
    <li>DistributionName — any name for distibution (like Work, Test etc.);</li>
    <li>InstallLocation — where to install ext4.vhdx, e.g. file system;</li>
    <li>ExportedFileLocation — location of distor.tar.gz.</li>
  </ul>

  <h5>Change default user from root to {m0ksem}</h5>
  <code class="code-snippet">
    Function WSL-SetDefaultUser ($distro="<b>DistroName</b>", $user="<b>UserName</b>") { Get-ItemProperty Registry::HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss\*\ DistributionName | Where-Object -Property DistributionName -eq $distro | Set-ItemProperty -Name DefaultUid -Value ((wsl -d $distro -u $user -e id -u) | Out-String); }; WSL-SetDefaultUser; Remove-Item Function:WSL-SetDefaultUser;
  </code>
  <p>Replace <b>DistroName</b> and <b>UserName</b></p>
  <a href="https://github.com/microsoft/WSL/issues/3974#issuecomment-522921145" target="_blank">Default user reference</a>
</template>
