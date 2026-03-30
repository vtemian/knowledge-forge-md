import { Search, Megaphone, Target, Briefcase, Lightbulb } from "lucide-react";
import type { AdviceCategory } from "@/data/content";

const icons: Record<AdviceCategory, React.ComponentType<{ className?: string }>> = {
  seo: Search,
  distribution: Megaphone,
  product: Target,
  business: Briefcase,
  mindset: Lightbulb,
};

const CategoryIcon = ({ category, className }: { category: AdviceCategory; className?: string }) => {
  const Icon = icons[category];
  return <Icon className={className} />;
};

export default CategoryIcon;
