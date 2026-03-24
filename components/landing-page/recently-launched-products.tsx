import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";



export default function RecentlyLaunchedProducts() {
const recentlyLaunchedProducts = [
//   {
//     id: 1,
//     name: "mapssmart",
//     description: "Control your home with voice commands .",
//    tags: ["saas", "iot", "home-automation"],
//    Votes: 596,
//    isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "cursor",
//     description: "Boost your coding productivity with AI suggestions.",   
//     tags: ["saas", "ai", "developer-tools"],
//     Votes: 432,
//     isFeatured: true,
//   }
]

return (
      <section className="py-20">
         <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
{
    recentlyLaunchedProducts.length > 0 ? (
        <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    ) : (
        <EmptyState 
        message="No products launced in last 3 days "
        icon={CalendarIcon} />
    )
}

</div>
      </section>
)
}