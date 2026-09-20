import { ArrowRight, Check } from 'lucide-react';
const steps=[['Fill Details','Enter token information'],['Preview','Review your token'],['Deploy','Deploy to blockchain'],['Done!','Your token is live 🎉']];
export function LaunchSteps({stage}:{stage:number}){return <section className="panel launch"><h2>Launch Steps</h2><div>{steps.map(([t,d],i)=><span className={stage>i?'done':stage===i?'current':''} key={t}><i>{stage>i?<Check/>:i+1}</i><b>{t}</b><small>{d}</small>{i<3&&<ArrowRight className="step-arrow"/>}</span>)}</div></section>}
