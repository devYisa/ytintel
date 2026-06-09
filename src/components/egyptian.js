import './egyptian.css'

export default function Egyptian(){

    const designLeft = ['𓁹', '𓄿', '𓋴', '𓐍', '𓂋', '𓏏', '𓇋', '𓏠', '𓈖', '𓏏']
    const designRight = ['𓀀', '𓏏', '𓈖', '𓉔', '𓏤', '𓆳', '𓏤', '𓏴']
    const designBottom = ['𓋹', '𓍘', '𓏤', '𓎟']

    return(
            <div className="text-frame">
              <div className="full-text left-text"> {designLeft.map((e, i)=> <div key={i}>{e}</div>) } </div>
              <div className="full-text right-text"> {designRight.map((e, i)=> <div key={i}>{e}</div>) } </div>
              <div className="floor-text">
                <div className="floor-line"></div>
                <div className="bottom-text"> {designBottom.map((e, i)=> <span key={i}>{e}</span>)} </div>
                <div className="floor-line"></div>
              </div>
            </div>
    )
}