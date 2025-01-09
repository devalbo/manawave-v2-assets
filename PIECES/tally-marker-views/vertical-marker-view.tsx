import { IInternalMarkerViewProps } from "./marker-view";
import { MarkerViewIconDiv, MarkerViewTextDiv, VerticalMarkerViewDiv } from "./marker-view-styles"


interface IVerticalMarkerViewProps extends IInternalMarkerViewProps {
  opacity: number;
  icon: JSX.Element;
  viewLabel: string;
}


export const VerticalMarkerView = (props: IVerticalMarkerViewProps) => {

  const { opacity, icon, viewLabel } = props;

  return (    
    <div style={{ opacity }}>
      <VerticalMarkerViewDiv
        {...props}
      >
        <MarkerViewIconDiv
          {...props}
        >
          {icon}
        </MarkerViewIconDiv>
        <MarkerViewTextDiv
          {...props}
        >
        {viewLabel}
      </MarkerViewTextDiv>
    </VerticalMarkerViewDiv>
    </div>
  )
}
