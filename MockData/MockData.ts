import { CompletedType } from "../constants/Value"

export interface IOrder {
   id: string | null;
   amountReceive: number;
   startOn: string;
   timeRange: string;
   pickUp: string;
   dropOff: string;
   currentDistance: number,
   distance: number,
   vanSize: string,
   duration: number,
   status?: string,
}

export const MockOrders: IOrder[] = [
   {
      id: null,
      amountReceive: 0,
      startOn: '',
      timeRange: '',
      pickUp: '',
      dropOff: '',
      currentDistance: 0,
      distance: 0,
      vanSize: '',
      duration: 0
   },
   {
      id: 'IP1612375571645',
      amountReceive: 3,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: 'W1T 3ER',
      dropOff: 'E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17
   },
   {
      id: 'IP1612375571646',
      amountReceive: 5,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: 'W1T 3ER',
      dropOff: 'E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17
   },
   {
      id: 'IP1612375571648',
      amountReceive: 6,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: 'W1T 3ER',
      dropOff: 'E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17
   }
]

export const MockOrdersComplete: IOrder[] = [
   {
      id: null,
      amountReceive: 0,
      startOn: '',
      timeRange: '',
      pickUp: '',
      dropOff: '',
      currentDistance: 0,
      distance: 0,
      vanSize: '',
      duration: 0
   },
   {
      id: 'IP1612375571649',
      amountReceive: 3,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: '23 Ford House, Kale Street, London,  W1T 3ER',
      dropOff: '17 Gill Studio, Sue Pond, London, E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17,
      status: CompletedType
   },
   {
      id: 'IP1612375571650',
      amountReceive: 7,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: '23 Ford House, Kale Street, London,  W1T 3ER',
      dropOff: '17 Gill Studio, Sue Pond, London, E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17,
      status: CompletedType
   },
   {
      id: 'IP1612375571651',
      amountReceive: 20,
      startOn: '08/26/2021',
      timeRange: '9:00 AM to 3:45 PM',
      pickUp: '23 Ford House, Kale Street, London,  W1T 3ER',
      dropOff: '17 Gill Studio, Sue Pond, London, E1 6LB',
      currentDistance: 36.6,
      distance: 4,
      vanSize: 'medium',
      duration: 17,
      status: CompletedType
   }
]