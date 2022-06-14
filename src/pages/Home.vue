<template>
  <h1>WSL2 Installation</h1>

  <h5>Windows Subsystem for Linux feature:</h5>
  <code class="code-snippet">
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  </code>

  <h5>Enable Virtual Machine feature</h5>
  <code class="code-snippet">
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  </code>

  <VaAlert color="warning">
    Reboot required
  </VaAlert>

  <h5>Download the Linux kernel update package</h5>

  <VaButton icon="download" href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi">Download Linux kernel</VaButton>

  <h5>Set WSL2 by default</h5>
  <code class="code-snippet">wsl --set-default-version 2</code>

  <h5>Install distributive from Windows Store</h5>
  <VaButton href="https://www.microsoft.com/store/apps/9N9TNGVNDL3Q">Ubuntu</VaButton>
</template>

<style lang="scss" scoped>
  .code-snippet {
    display: block;
  }
</style>