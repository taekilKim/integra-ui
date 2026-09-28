"use client"

import * as React from "react"
import { CalendarBlank, CheckCircle, Clock, Users } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormErrors = {
  name?: string
  email?: string
  schedule?: string
}

const schedules = [
  { value: "sat-1400", label: "토요일 오후 2:00", note: "여유 4자리" },
  { value: "sat-1630", label: "토요일 오후 4:30", note: "여유 2자리" },
  { value: "sun-1100", label: "일요일 오전 11:00", note: "여유 6자리" },
]

export function ReservationFlow() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [schedule, setSchedule] = React.useState("")
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [completed, setCompleted] = React.useState(false)

  const selectedSchedule = schedules.find((item) => item.value === schedule)

  function validate() {
    const nextErrors: FormErrors = {}
    if (!name.trim()) nextErrors.name = "예약자 이름을 입력해 주세요."
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "이메일 형식을 확인해 주세요."
    if (!schedule) nextErrors.schedule = "방문 시간을 선택해 주세요."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function openConfirmation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (validate()) setDialogOpen(true)
  }

  async function submitReservation() {
    setSubmitting(true)
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    setSubmitting(false)
    setDialogOpen(false)
    setCompleted(true)
  }

  function reset() {
    setName("")
    setEmail("")
    setSchedule("")
    setErrors({})
    setCompleted(false)
  }

  if (completed) {
    return (
      <section className="flex min-h-560 items-center justify-center rounded-card border border-line bg-surface-raised p-24 md:p-48">
        <div className="max-w-400 text-center" aria-live="polite">
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-feedback-positive-subtle text-feedback-positive">
            <CheckCircle className="h-36 w-36" weight="fill" aria-hidden="true" />
          </div>
          <h2 className="mt-24 fs-28 font-bold leading-36 tracking--2 text-content-primary">예약 신청이 완료됐어요</h2>
          <p className="mt-12 fs-15 leading-24 text-content-secondary">
            {selectedSchedule?.label}에 만나요. 입력한 이메일로 예약 내용을 보내드렸습니다.
          </p>
          <Button className="mt-28" appearance="outlined" variant="tertiary" onClick={reset}>
            다른 일정 예약하기
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="overflow-hidden rounded-card border border-line bg-surface-raised shadow-integra">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="bg-surface-inverse p-28 text-content-inverse md:p-40">
          <p className="fs-12 font-bold uppercase tracking-2 text-primary-subtle-foreground">Weekend Workshop</p>
          <h2 className="mt-16 fs-32 font-bold leading-40 tracking--3">내 제품의 첫 화면을 함께 다듬어요</h2>
          <p className="mt-16 fs-15 leading-24 opacity-75">
            한국어 정보 위계와 폼 상태를 실제 화면으로 점검하는 90분 워크숍입니다.
          </p>
          <dl className="mt-32 space-y-16 fs-14">
            <div className="flex items-center gap-12"><CalendarBlank className="h-20 w-20" /><span>토·일 중 선택</span></div>
            <div className="flex items-center gap-12"><Clock className="h-20 w-20" /><span>90분 진행</span></div>
            <div className="flex items-center gap-12"><Users className="h-20 w-20" /><span>회차당 최대 8명</span></div>
          </dl>
        </aside>

        <form className="space-y-28 p-24 md:p-40" onSubmit={openConfirmation} noValidate>
          <div>
            <p className="fs-13 font-semibold text-primary">예약 정보</p>
            <h3 className="mt-6 fs-24 font-bold leading-32 tracking--2 text-content-primary">참여할 일정을 선택해 주세요</h3>
            <p className="mt-8 fs-14 leading-24 text-content-secondary">예약 확인에 필요한 정보만 받습니다.</p>
          </div>

          <div className="grid gap-20 sm:grid-cols-2">
            <div className="space-y-8">
              <Label htmlFor="reservation-name">이름</Label>
              <Input
                id="reservation-name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "reservation-name-error" : undefined}
              />
              {errors.name && <p id="reservation-name-error" role="alert" className="fs-13 text-feedback-negative">{errors.name}</p>}
            </div>
            <div className="space-y-8">
              <Label htmlFor="reservation-email">이메일</Label>
              <Input
                id="reservation-email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "reservation-email-error" : undefined}
              />
              {errors.email && <p id="reservation-email-error" role="alert" className="fs-13 text-feedback-negative">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-8">
            <Label htmlFor="reservation-schedule">방문 시간</Label>
            <Select value={schedule} onValueChange={(value) => { setSchedule(value); setErrors((current) => ({ ...current, schedule: undefined })) }}>
              <SelectTrigger id="reservation-schedule" aria-invalid={Boolean(errors.schedule)} aria-describedby={errors.schedule ? "reservation-schedule-error" : undefined}>
                <SelectValue placeholder="일정을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {schedules.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.schedule && <p id="reservation-schedule-error" role="alert" className="fs-13 text-feedback-negative">{errors.schedule}</p>}
          </div>

          <div className="space-y-8">
            <p className="fs-13 font-semibold text-content-secondary">빠른 선택</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {schedules.map((item) => (
                <Item
                  key={item.value}
                  type="button"
                  aria-pressed={schedule === item.value}
                  data-state={schedule === item.value ? "on" : "off"}
                  onClick={() => { setSchedule(item.value); setErrors((current) => ({ ...current, schedule: undefined })) }}
                  className="h-auto min-h-control-md flex-col items-start px-12 py-10"
                >
                  <span>{item.label.replace("요일 ", " ")}</span>
                  <span className="fs-12 font-normal text-content-tertiary">{item.note}</span>
                </Item>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">예약 내용 확인하기</Button>
        </form>
      </div>

      <Dialog open={dialogOpen} onOpenChange={(open) => !submitting && setDialogOpen(open)}>
        <DialogContent showCloseIcon={!submitting}>
          <DialogHeader>
            <DialogTitle>이대로 예약할까요?</DialogTitle>
            <DialogDescription>입력한 정보와 일정을 한 번 더 확인해 주세요.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <dl className="divide-y divide-line rounded-control bg-surface-subtle px-16">
              <div className="flex justify-between gap-16 py-12"><dt>예약자</dt><dd className="font-semibold text-content-primary">{name}</dd></div>
              <div className="flex justify-between gap-16 py-12"><dt>일정</dt><dd className="font-semibold text-content-primary">{selectedSchedule?.label}</dd></div>
            </dl>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild><Button appearance="text" variant="secondary" disabled={submitting}>다시 확인</Button></DialogClose>
            <Button loading={submitting} loadingLabel="예약 처리 중" onClick={submitReservation}>예약하기</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
