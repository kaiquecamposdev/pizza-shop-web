import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersCard } from './month-orders-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsCharts } from './popular-products-charts'
import { RevenueCharts } from './revenue-charts'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold leading-tight">Dashboard</h1>
        <div className="grid grid-cols-dashboard gap-4">
          <MonthRevenueCard value={23243} margin={4} />
          <MonthOrdersCard value={324} margin={10} />
          <DayOrdersAmountCard value={43} margin={10} />
          <MonthCanceledOrdersAmountCard value={22} margin={34} />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueCharts />
          <PopularProductsCharts />
        </div>
      </div>
    </>
  )
}
