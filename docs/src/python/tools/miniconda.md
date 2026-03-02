
# miniconda

> 参考：[https://blog.csdn.net/djfjkj52/article/details/107330301](https://blog.csdn.net/djfjkj52/article/details/107330301)

## 下载安装

```shell
wget -c https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh # 下载
chmod 777 Miniconda3-latest-Linux-x86_64.sh #给执行权限
bash Miniconda3-latest-Linux-x86_64.sh #运行
```

不将conda加入环境变量

```shell
Do you wish the installer to initialize Miniconda3
by running conda init? [yes|no]
[no] >>> 
```

## 添加源

```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
```

```shell
conda config --set show_channel_urls yes
conda config --get channels
```

```shell
vim ~/.condarc # 记录源文件
```

## 命令

```shell
# 给权限
chmod 777 ~/miniconda3/bin/activate
# 启动
source ~/miniconda3/bin/activate
# 退出
source ./deactivate
# 或者
conda deactivate
```
