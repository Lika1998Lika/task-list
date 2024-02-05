import { toast } from "react-toastify"

export const useToast = () => {
  const variants = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
  }

  return {
    success: variants.success,
    error: variants.error,
  }
}