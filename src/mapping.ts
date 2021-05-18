interface ObjM {
  a: string
  b: number
  c: boolean
}

type ReadonlyObj = Readonly<ObjM>

type PartialObj = Partial<ObjM>

type PickObj = Pick<ObjM, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', ObjM>