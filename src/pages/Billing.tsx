// import BillingIntelligence from "@/components/Billing/BillingIntelligence";
import BillingTimeline from "@/components/Billing/BillingTimeline";
import CostGuard from "@/components/Billing/CostGuard";
import CostSimulator from "@/components/Billing/CostSimulator";
import CreditFlow from "@/components/Billing/CreditFlow";
import Hero from "@/components/Billing/Hero";
import InvoiceConverter from "@/components/Billing/InvoiceConverter";
import PaymentVault from "@/components/Billing/PaymentVault";
import SpendRIver from "@/components/Billing/SpendRIver";
import SubscriptionCommand from "@/components/Billing/SubscriptionCommand";


export default function Billing() {
  return (
    <div>
     <Hero />
     <SpendRIver />
     <CreditFlow />
     <BillingTimeline />
     <SubscriptionCommand />
     <PaymentVault />
     <InvoiceConverter />
     <CostGuard />
     <CostSimulator />
     {/* <BillingIntelligence /> */}
    </div>
  )
}
