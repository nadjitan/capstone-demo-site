import { NextPage } from "next"

const Foo: NextPage<{title?: string}> = ({title}) => {
 return <div>{title}</div>
}
export default Foo