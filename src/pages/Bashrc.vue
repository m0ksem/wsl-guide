<template>
  <h1>Bashrc</h1>

  Open .bashrc with VSCode

  <code class="code-snippet">
    code ~/.bashrc
  </code>

  <h5>Add git branch name in CLI</h5>

  <code class="code-snippet">
    # -------------- COLOR GIT -------------<br/>
  PURPLE_START="\033[37;1;45m"<br/>
  PURPLE_END="\033[0m"<br/>
  NO_COLOR="\[\033[0m\]"<br/>
<br/>
  parse_git_branch() {<br/>
    local git_branch=$(git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/')<br/>
    echo $git_branch<br/>
  }<br/>
  PS1="$PURPLE_START\$(parse_git_branch)$PURPLE_END$NO_COLOR${debian_chroot:+($debian_chroot)}\w$ "<br/>
  # --------------------------------------<br/>
  </code>
</template>