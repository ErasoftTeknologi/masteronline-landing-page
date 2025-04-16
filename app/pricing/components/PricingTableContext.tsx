import { ReactNode, createContext, useContext, useState } from "react";

type ExtraFee = {
  id: string,
  featureId: string
  amount: number
}

type PricingTableContextValue = {
  extras: ExtraFee[],
  upsertExtra: (e: ExtraFee) => void
  setExtras: (e: ExtraFee[]) => void
}

export const PricingTableContext = createContext<PricingTableContextValue>({
  extras: [],
  upsertExtra: () => { },
  setExtras: () => { }
})

type PricingTableContextProviderProps = {
  children: ReactNode
}

export function PricingTableContextProvider({ children }: PricingTableContextProviderProps) {
  const [extras, setExtras] = useState<ExtraFee[]>([])

  const handleUpsertExtra = (e: ExtraFee) => {
    const newExtras = [...extras]
    const existingIdx = newExtras.findIndex(c => c.id === e.id && c.featureId == e.featureId)
    if (existingIdx !== -1)
      newExtras[existingIdx] = e
    else
      newExtras.push(e)
    setExtras(newExtras)

  }
  return (
    <PricingTableContext.Provider value={{
      extras, setExtras, upsertExtra: handleUpsertExtra
    }}>
      {children}
    </PricingTableContext.Provider>
  )
}

export function usePricingTableContext() {
  return useContext(PricingTableContext)
}