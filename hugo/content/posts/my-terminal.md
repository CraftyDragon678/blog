---
title: "터미널 꾸미기"
date: 2020-07-30T16:31:45+09:00
tags: [terminal]
summary: 터미널을 입맛에 맞게 꾸며보았습니다.
draft: true
---

> [이 글](https://subicura.com/2017/11/22/mac-os-development-environment-setup.html)을
참고하면서 꾸몄습니다.

최근 시험이 끝나서 개발과 관련된 여러가지 세팅을 했습니다.

그 중 하나가 터미널을 꾸미는 일인데,
저는 우선 `vim`을 사용하고 있어서 그것과 관련된 세팅이 많았던 것 같습니다.

개발 환경은 다음과 같습니다.
- Windows 10 Pro
- Windows Subsystem for Linux
  - Ubuntu 16.04

보통 많은 글들이 MacOS에 맞춰져 있어서 리눅스를 위한 개발 세팅(!!)을 써보겠습니다.


# zsh(Z shell)
리눅스의 기본 터미널을 몹시나 불편합니다.
그래서 zsh를 설치해줍니다.
아래에서 나올 `instant_prompt`를 사용하려면 zsh가 최신버전이어야 합니다.

간단합니다.
```bash
sudo apt install zsh
```

## oh-my-zsh
뿐만 아니라 zsh의 확장판인 oh-my-zsh도 같이 설치해줍니다.
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## NerdFont
테마를 설치하기 전에 NerdFont를 설치해줍니다.
[https://github.com/ryanoasis/nerd-fonts](여기)에서 폰트를 받을 수 있습니다.


## powerlevel10k
zsh의 테마중 하나로 instant prompt를 지원해서 만족도가 매우 높습니다.
```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

후에 `ZSH_THEME="powerlevel10k/powerlevel10k"`를 `~/.zshrc`에 추가해줍니다.

`source ~/.zshrc`를 실행하거나 터미널을 새로 열면 configure창이 뜹니다.
여기서 단계에 맞게 진행해줍니다.
만약 위에서 NerdFont가 잘 적용 되었다면 다양한 아이콘을 터미널에서 보실 수 있습니다.

# linuxbrew
우선 MacOS에서도 사용을 할 수 있는 `brew`를 설치했습니다.
[여기](https://brew.sh/)에서 설치할 수 있습니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

brew는 패키지 관리를 해주는데 자동 업데이트 등을 포함하고 있어서 매우 편합니다.

# git
기본적으로 git은 깔려있지만 설정을 해주어야합니다.

## config
```bash
git config --global user.name "Your Name"
git config --global user.email "you@your-domain.com"
```

## ssh
추가로 패스워드를 입력하지 않고 푸시를 하기 위해서 ssh를 설정해줍니다.
[여기](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)에
자세한 내용이 있습니다.

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
엔터 쭉쭉
그리고 퍼블릭 키를 [깃헙 설정](https://github.com/settings/keys)에 추가해줍니다.

## gpg
`gpg`또한 사용을 하는데 (왠지 하면 기분이 좋음) WSL에서 설정하는게 너무 복잡합니다.

여기서 일단 gpg를 설치해줍니다.

그리고 나와있는 것처럼 명령을 입력해줍니다.
```bash
gpg --full-generate-key
```

여기서 정상적으로 된다면 좋겠지만 마우스를 인식하지 못하는 오류가 발생합니다.

~~는 추가예정~~

# 
  
