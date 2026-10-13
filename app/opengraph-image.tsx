import { ImageResponse } from "next/og";

export const alt = "UNO+ — Tu departamento externo de IA para pymes y autónomos";
export const size = { width:1200, height:630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",padding:"64px 72px",background:"#123328",color:"#f6f7f2",fontFamily:"Arial, sans-serif"}}><div style={{display:"flex",fontSize:42,fontWeight:700,color:"#c0ef77"}}>UNO+</div><div style={{display:"flex",flexDirection:"column",fontSize:72,lineHeight:1.12,fontWeight:700,letterSpacing:-3}}><span>Tu departamento</span><span>externo de IA.</span></div><div style={{display:"flex",borderTop:"1px solid #486c51",paddingTop:24,fontSize:23,color:"#bdd0be"}}>DIAGNÓSTICO · SOLUCIONES · FORMACIÓN · ACOMPAÑAMIENTO</div></div>,size);
}

export const dynamic = "force-static";
