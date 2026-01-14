"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

/**
 * [Integra UI - Toaster SAI Version]
 * 생성된 토스트 알림들을 화면에 순서대로 렌더링하는 관리자 컴포넌트입니다.
 * 모든 간격은 4px 그리드(gap-4) 시스템을 준수합니다.
 */
export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* 
               gap-4: 4px 그리드 기반의 수직 간격 적용 
               제목과 설명 사이의 아토믹 리듬을 형성합니다.
            */}
            <div className="grid gap-4">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}