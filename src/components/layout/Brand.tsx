import { FlaskConical } from 'lucide-react';
export function Brand({compact=false}:{compact?:boolean}){return <div className="brand"><span className="brand-mark"><FlaskConical size={compact?15:20}/></span>{!compact&&<strong>Crypto<span>Flask</span></strong>}</div>}
