export type NetworkId = 'bsc'|'ethereum'|'polygon'|'base'|'arbitrum'|'solana';
export interface TokenConfig { name:string; symbol:string; supply:string; decimals:number; network:NetworkId; description:string; logo?:string; mintable:boolean; burnable:boolean; pausable:boolean; }
export interface Network { id:NetworkId; label:string; standard:string; short:string; color:string; }
export const networks: Network[] = [
  {id:'bsc',label:'BSC (BEP20)',standard:'BEP20 Token',short:'BSC',color:'#f0b90b'},
  {id:'ethereum',label:'Ethereum (ERC20)',standard:'ERC20 Token',short:'ETH',color:'#7987f5'},
  {id:'polygon',label:'Polygon',standard:'ERC20 Token',short:'POL',color:'#a879ff'},
  {id:'base',label:'Base',standard:'ERC20 Token',short:'BASE',color:'#3174ff'},
  {id:'arbitrum',label:'Arbitrum',standard:'ERC20 Token',short:'ARB',color:'#2d8dd6'},
  {id:'solana',label:'Solana',standard:'SPL Token',short:'SOL',color:'#14f195'}
];
export const defaultConfig:TokenConfig={name:'Flask USDT',symbol:'FUSDT',supply:'1000000000',decimals:6,network:'bsc',description:'Flask USDT — A custom USD-style token for testing and decentralized applications.',mintable:false,burnable:true,pausable:false};
