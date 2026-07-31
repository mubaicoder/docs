# pyenv

## windows安装

### 安装

```shell
pip install pyenv-win --target %USERPROFILE%/.pyenv
```

### 环境变量

设置一个系统变量`PYENV`，值为`C:\Users\用户名\.pyenv\pyenv-win`

path 里面添加：

```shell
%PYENV%\bin
%PYENV%\shims
```

### 换源

- 配置环境变量：PYTHON_BUILD_MIRROR_UR = https://mirrors.huaweicloud.com/python/

- 将`C:\Users\用户名\.pyenv\pyenv-win\.versions_cache.xml`删除

- 执行`pyenv update`重新生成`.versions_cache.xml`文件

### 使用方法

```shell
# 将pyenv相关环境变量放到Path中所有python相关的最上面
# 使用pyenv global XXX 切换到一个特定的python版本
# 或在项目目录中pyenv local XXX 给项目一个固定的版本
# 进入项目目录创建虚拟环境
python -m venv .venv # python -m venv XXX（虚拟环境名）
# 激活虚拟环境
.\.venv\Scripts\activate
# 退出虚拟环境
deactivate
```

## linux安装

> 参考：[https://blog.kyomind.tw/ubuntu-pyenv/](https://blog.kyomind.tw/ubuntu-pyenv/)
> [https://blog.csdn.net/weixin_42892543/article/details/122544900](https://blog.csdn.net/weixin_42892543/article/details/122544900)

### 安装

```shell
# 系统没有python命令，安装python-is-python3包可以指定python为默认的python3
sudo apt install python-is-python3

git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

### 环境变量

```shell
# 这一段貌似有问题
echo -e 'if shopt -q login_shell; then' \
      '\n  export PYENV_ROOT="$HOME/.pyenv"' \
      '\n  export PATH="$PYENV_ROOT/bin:$PATH"' \
      '\n eval "$(pyenv init --path)"' \
      '\nfi' >> ~/.bashrc
# 需要改成下面两条，先记录一下，后续观察
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc

echo -e 'if [ -z "$BASH_VERSION" ]; then'\
      '\n  export PYENV_ROOT="$HOME/.pyenv"'\
      '\n  export PATH="$PYENV_ROOT/bin:$PATH"'\
      '\n  eval "$(pyenv init --path)"'\
      '\nfi' >>~/.profile
echo 'if command -v pyenv >/dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bashrc
source ~/.bashrc
```

### 安装依赖

```shell
sudo apt-get install libc6-dev gcc
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm
```

### 指定源下载

> 参考：[https://blog.csdn.net/qq_43213352/article/details/104343365](https://blog.csdn.net/qq_43213352/article/details/104343365)

```shell
v=3.6.0; wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/cache/; pyenv install $v 
```

### 安装pyenv-virtualenv

```shell
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
```

### 使用方法

```shell
# 以3.8.7（需要先install）创建虚拟环境
pyenv virtualenv 3.8.7 test 
# 激活
pyenv activate test
# 退出
pyenv deactivate test
# 删除
pyenv uninstall test
# 或者在目录里创建虚拟环境
python -m venv .venv
# 激活
source ./.venv/bin/activate
# 退出
deactivate
```

## 常用命令

```shell
# 列出当前系统中所有安装的python
pyenv versions
# 显示出当前使用的python
pyenv version
# 设置使用哪一个python
pyenv global <python_version>
# 恢复系统版本
pyenv global system
# 通过将版本号写入当前目录下的 .python-version 文件的方式设置 Python 本地版本
pyenv local <python_version>
# 取消本地版本设置
pyenv local –unset
# 安装特定版本的python
pyenv install <python_version> # pyenv install 3.8.7
# 移除特定版本的python
pyenv uninstall <python_version>
# 查看可安装的python
pyenv install -l
# 升级
pyenv update
# 重建环境变量，每当你增删python版本或增删带可执行性的包（如pip）以后，都应该执行一次本命令
pyenv rehash  
```
