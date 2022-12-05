import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Checkout } from '../screens/Checkout'
import { Confirmation } from '../screens/Confirmation'
import { Home } from '../screens/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Confirmation />} />
      </Route>
    </Routes>
  )
}
