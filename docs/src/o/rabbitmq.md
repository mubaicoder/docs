# rabbitmq
## 消息队列

> https://www.yuque.com/tulingzhouyu/sfx8p0/wgnfgb6yqet547mt?singleDoc#

### 作用

应用解耦、异步提速、流量削峰

### rabbitmq

生产者->交换机->队列->消费者

AMQP

一种二进制协议，定义一组规则和标准，以确保消息可以在不同应用程序和平台之间传递和解释，四个核心组件：消息、交换机、队列、绑定



交换机类型

direct: 路由键与队列名完全匹配交换机

fanout: 扇出类型交换机，会将消息分发给所有绑定了些交换机的队列，不管routerkey

topic: 主题类型交换机，模糊匹配routerkey

headers:匹配header而不是routerkey,性能差，几乎不用



配置集群了，发到一个rabbitmq后，如果这个节点挂了数据会丢，所以要开启镜像队列，在管理后台配置，我们配置的是所有节点自动同步



负载均衡：HAproxy



