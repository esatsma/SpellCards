import { ReactNode } from 'react'

/** Enforcing only `BottomSheetModalContainer/Content` are allowed as contents for the BottomSheet */
export type BottomSheetModalInstance = (ReactNode & { type: 'BottomSheetModalInstance' }) | null
