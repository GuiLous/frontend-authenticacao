import { ReactNode } from "react"
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  roles?: string[];
  permissions?: string[];
}
export default function Can({ children, roles, permissions }: CanProps) {
  const userCanSeeComponent = useCan({permissions, roles})

  if(!userCanSeeComponent) {
    return null;
  }
  
  return (
    <>
      {children}
    </>
  )
}