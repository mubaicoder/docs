# miniforge

Anaconda对企业开始收费了，所以使用miniforge来替代

## 下载安装

[https://github.com/conda-forge/miniforge/releases](https://github.com/conda-forge/miniforge/releases)

## 环境变量

- 配置 Miniforge3_home 变量，值为Miniforge3的安装路径。

- 在 Path 变量中相继配置：%Miniforge3_home%、%Miniforge3_home%\Library\bin、%Miniforge3_home%\Scripts

## 配置源

到清华下载源配置里找：[https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)

## 目录权限

将`/etc`、`/pkgs`这两个文件夹的权限都改到最大

## 迁移Anaconda

将anaconda的envs目录直接拷到miniforge目录下

## pycharm中使用

和原来Ananconda一样

## 使用

```shell
# 版本
mamba --version 
# 查看所有环境
mamba info --envs
# 创建新环境
mamba create -n py38 python=3.8
# 克隆环境
mamba create --clone py38 --name new_py38
# 删除环境
mamba remove -n py38 --all
# 激活环境
mamba activate py38
# 退出环境
mamba deactivate
# 查看所有环境
mamba info --envs
# 安装库多个包
mamba install numpy pandas
# 指定版本安装
mamba install tensorflow=2.15
# 删除库包
mamba remove numpy
# 更新库包
mamba update numpy
# 更新所有库包
mamba update --all
# 清理所有缓存
mamba clean --all
```
