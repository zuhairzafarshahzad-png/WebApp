import { networks, type NetworkId } from '../types/token';
export const getNetwork=(id:NetworkId)=>networks.find(n=>n.id===id)!;
export const formatSupply=(value:string)=>{const clean=value.replace(/\D/g,''); return clean ? BigInt(clean).toLocaleString('en-US') : '0';};
export const stamp=()=>new Date().toLocaleTimeString('en-GB',{hour12:false});
export const shortAddress=(a:string)=>`${a.slice(0,6)}...${a.slice(-4)}`;
