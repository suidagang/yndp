import dayjs from "dayjs"

//获取当前月份
export const getCurrentMonth = () => {
  return Number(dayjs().month()) + 1;
}

//获取上个月份
export const getPreMonth = () => {
  return Number(dayjs().month());
}