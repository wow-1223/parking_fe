# 共享停车位小程序

一个基于微信小程序的共享停车位平台，支持用户查找、预订停车位，车位主发布和管理车位。

## 功能特点

- 用户端：
  - 查找附近停车位
  - 预订停车位
  - 订单管理
  - 收藏管理
  
- 出租方：
  - 发布车位
  - 管理车位
  - 订单管理
  - 收益统计

## 开发环境

- Node.js >= 14
- 微信开发者工具
- TypeScript >= 4.9
- Less

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/your-username/parking-sharing-miniapp.git
```

2. 安装依赖
```bash
npm install
```

3. 开发
```bash
npm run dev
```

4. 编译
```bash
npm run build
```

## 项目结构

```
miniprogram/
├── components/        # 公共组件
├── pages/            # 页面
│   ├── user/         # 用户端页面
│   └── owner/        # 出租方页面
├── services/         # API 服务
├── styles/           # 全局样式
├── utils/            # 工具函数
└── app.ts           # 入口文件
```

## API 文档

详见 [API.md](./API.md)

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的改动 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

## 许可证

本项目使用 MIT 许可证 - 详见 [LICENSE](./LICENSE) 文件

# 共享停车位小程序 API 文档

## 用户端接口

### 1. 用户认证
- 登录
  ```
  POST /api/user/login
  Request: {
    code: string // 微信登录code
  }
  Response: {
    token: string,
    userId: string,
    userInfo: {
      nickName: string,
      avatarUrl: string
    }
  }
  ```

### 2. 停车位相关
- 获取附近停车位列表
  ```
  GET /api/parking/nearby
  Request: {
    latitude: number,
    longitude: number,
    radius?: number, // 搜索半径，单位：米
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [{
      id: string,
      location: string,
      latitude: number,
      longitude: number,
      price: number,
      image: string,
      status: 'available' | 'occupied',
      distance: number // 距离，单位：米
    }]
  }
  ```

- 搜索停车位
  ```
  GET /api/parking/search
  Request: {
    keyword: string,
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [ParkingSpot]
  }
  ```

- 获取停车位详情
  ```
  GET /api/parking/{id}
  Response: {
    id: string,
    location: string,
    description: string,
    images: string[],
    price: number,
    status: 'available' | 'occupied',
    owner: {
      id: string,
      name: string,
      phone: string,
      rating: number
    },
    rules: string[],
    facilities: string[]
  }
  ```

### 3. 订单相关
- 创建订单
  ```
  POST /api/orders
  Request: {
    parkingId: string,
    startTime: string, // ISO 时间格式
    endTime: string,
    carNumber: string
  }
  Response: {
    orderId: string,
    totalAmount: number,
    status: 'pending' | 'confirmed'
  }
  ```

- 获取订单列表
  ```
  GET /api/orders
  Request: {
    status?: 'all' | 'ongoing' | 'completed' | 'cancelled',
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [{
      id: string,
      parkingSpot: {
        id: string,
        location: string,
        image: string
      },
      startTime: string,
      endTime: string,
      amount: number,
      status: string,
      carNumber: string
    }]
  }
  ```

- 取消订单
  ```
  POST /api/orders/{id}/cancel
  Response: {
    success: boolean,
    refundAmount?: number
  }
  ```

### 4. 收藏相关
- 收藏/取消收藏
  ```
  POST /api/favorites
  Request: {
    parkingId: string,
    action: 'add' | 'remove'
  }
  Response: {
    success: boolean
  }
  ```

- 获取收藏列表
  ```
  GET /api/favorites
  Request: {
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [ParkingSpot]
  }
  ```

## 出租方接口

### 1. 车位管理
- 发布车位
  ```
  POST /api/owner/parking
  Request: {
    location: string,
    latitude: number,
    longitude: number,
    description: string,
    price: number,
    images: string[],
    rules: string[],
    facilities: string[]
  }
  Response: {
    id: string,
    status: 'pending' | 'approved'
  }
  ```

- 修改车位信息
  ```
  PUT /api/owner/parking/{id}
  Request: {
    location?: string,
    description?: string,
    price?: number,
    images?: string[],
    rules?: string[],
    facilities?: string[]
  }
  Response: {
    success: boolean
  }
  ```

- 获取车位列表
  ```
  GET /api/owner/parking
  Request: {
    status?: 'all' | 'available' | 'occupied',
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [{
      id: string,
      location: string,
      status: string,
      currentOrder?: {
        id: string,
        endTime: string
      }
    }]
  }
  ```

### 2. 订单管理
- 获取订单列表
  ```
  GET /api/owner/orders
  Request: {
    status?: 'all' | 'ongoing' | 'completed' | 'cancelled',
    page?: number,
    pageSize?: number
  }
  Response: {
    total: number,
    list: [{
      id: string,
      parkingSpot: {
        id: string,
        location: string
      },
      user: {
        id: string,
        name: string,
        phone: string
      },
      startTime: string,
      endTime: string,
      amount: number,
      status: string,
      carNumber: string
    }]
  }
  ```

### 3. 统计相关
- 获取收益统计
  ```
  GET /api/owner/statistics/earnings
  Request: {
    timeRange: 'day' | 'week' | 'month' | 'year',
    startDate?: string,
    endDate?: string
  }
  Response: {
    total: number,
    list: [{
      date: string,
      amount: number,
      orderCount: number
    }]
  }
  ```

- 获取车位使用率
  ```
  GET /api/owner/statistics/usage
  Request: {
    parkingId?: string,
    timeRange: 'day' | 'week' | 'month',
    startDate?: string,
    endDate?: string
  }
  Response: {
    average: number, // 百分比
    list: [{
      date: string,
      rate: number // 百分比
    }]
  }
  ```

## 通用接口

### 1. 文件上传
- 上传图片
  ```
  POST /api/upload/image
  Request: FormData
  Response: {
    url: string
  }
  ```

### 2. 支付相关
- 创建支付订单
  ```
  POST /api/payment/create
  Request: {
    orderId: string
  }
  Response: {
    timeStamp: string,
    nonceStr: string,
    package: string,
    signType: string,
    paySign: string
  }
  ```

- 查询支付状态
  ```
  GET /api/payment/{orderId}/status
  Response: {
    status: 'pending' | 'paid' | 'failed'
  }
  ```

注意：
1. 所有接口都需要在 header 中携带 token 进行身份验证
2. 分页参数默认值：page=1, pageSize=20
3. 时间相关的字段均使用 ISO 格式
4. 涉及金额的字段单位均为分
5. 所有请求失败时会返回统一的错误格式：
   ```
   {
     code: number,
     message: string
   }
   ``` 