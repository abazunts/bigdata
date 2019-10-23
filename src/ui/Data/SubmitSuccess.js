import React from "react";
import Button from "../../elements/Button/button";


const SubmitSuccess = (props) => {
    const {t, onClick} = props;
    return <div className={props.i18n.language === 'ar' && 'rtl'}>
        <div>
            <div className="content-header b-b">
                <h2 className="content-header__title">Information</h2>
                <p className="text text-gray pt-xs">{t(`inspections.${props.message}`)}</p>
            </div>
            <div className="text-center">
                <div style={{marginTop: '20px'}}>
                <Button onClick={onClick}
                        title={t("inspections.closeButton")}
                        className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow"/>
                </div>
            </div>
        </div>
    </div>

};


export default SubmitSuccess