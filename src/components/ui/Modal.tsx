import { X } from 'lucide-react';
import type { ReactNode } from 'react';
export function Modal({title,children,onClose,width='520px'}:{title:string;children:ReactNode;onClose:()=>void;width?:string}) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><section className="modal" role="dialog" aria-modal="true" aria-label={title} style={{maxWidth:width}} onKeyDown={e=>e.key==='Escape'&&onClose()}><header><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={17}/></button></header>{children}</section></div>;
}
