import { useLocation, Link, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

// Optional static mapping for readable names
const routeNameMap: Record<string, string> = {
  dashboard: "Dashboard",
  wallet: "Wallet",
  user: "User",
  details: "Details",
  // Add more fixed mappings here
};

// Dynamic param mapping
const paramNameMap: Record<string, string> = {
  phone: "Wallet Details",
  email: "User Details",
  // Add other param-based names if needed
};

export default function DynamicBreadcrumbs() {
  const location = useLocation();
  const params = useParams(); // { phone: '01712186380', email: 'test@example.com' }
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="text-sm md:text-base">
      <BreadcrumbList className="flex items-center">
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const path = `/${segments.slice(0, index + 1).join("/")}`;

          // Default: replace dashes or use routeNameMap
          let name = routeNameMap[segment] || segment.replace(/-/g, " ");

          // Check if this segment matches any param value
          Object.entries(params).forEach(([key, value]) => {
            if (segment === value) {
              name = paramNameMap[key] || value; // show friendly name based on param type
            }
          });

          return (
            <span key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink asChild>
                      <Link
                        to={path}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors capitalize duration-150 font-medium"
                      >
                        {name}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:flex text-gray-400">
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </BreadcrumbSeparator>
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900 capitalize dark:text-white font-semibold">
                    {name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
