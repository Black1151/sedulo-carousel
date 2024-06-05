import CarouselDisplay from "@/components/carousel/CarouselDisplay"
import { CarouselItemProps } from "@/components/carousel/CarouselItem"
import Header from "@/components/layout/Header"
import { Box } from "@chakra-ui/react"

//// object to represnet data fetched from backend - fully extensible
const carouselItems: CarouselItemProps[] = [
  {
    logoImage: "/assets/apps/expenseTracker/expenseTackerLogo.png",
    backgroundImage: "/assets/apps/expenseTracker/expenseTackerBg.png",
    alt: "Expense Genie",
    name: "Expense Genie",
    description:
      "Expense Genie uses AI to automatically categorize and track your expenses, offering real-time expense reports and tax deduction suggestions.",
  },
  {
    logoImage: "/assets/apps/finSight/finSightLogo.png",
    backgroundImage: "/assets/apps/finSight/finSightBG.png",
    alt: "FinSight",
    name: "FinSight",
    description:
      "Fin Sight provides a real-time dashboard for financial metrics and KPIs, delivering insights into cash flow, profitability, and overall financial health.",
  },
  {
    logoImage: "/assets/apps/invoicePro/invoicePro.png",
    backgroundImage: "/assets/apps/invoicePro/invoiceProBG.png",
    alt: "Invoice Pro",
    name: "Invoice Pro",
    description:
      "Invoice Pro is a comprehensive invoicing solution that allows you to create, send, and manage invoices with integrated payment gateways and automated reminders.",
  },
  {
    logoImage: "/assets/apps/payrollMaster/payrollMasterLogo.png",
    backgroundImage: "/assets/apps/payrollMaster/payrollMasterBG.png",
    alt: "Pay Master",
    name: "Pay Master",
    description:
      "Pay Master simplifies payroll processing, handling employee payments, tax withholdings, benefits administration, and compliance with labor laws.",
  },
  {
    logoImage: "/assets/apps/taxMate/taxMateLogo.png",
    backgroundImage: "/assets/apps/taxMate/taxMateBG.png",
    alt: "Tax Mate",
    name: "Tax Mate",
    description:
      "Tax Mate helps businesses stay compliant with tax regulations by tracking taxable transactions, calculating tax liabilities, and providing filing reminders.",
  },
]

export default function Home() {
  return (
    <Box>
      <Header />
      <CarouselDisplay carouselItems={carouselItems} />
    </Box>
  )
}
