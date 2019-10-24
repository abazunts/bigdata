import React from 'react';
import MaterialTable from 'material-table';
import {Redirect} from "react-router-dom";
import 'react-table/react-table.css'
import {Button} from "../../elements/Button";

const Data = (props) => {
    const {t, isAuth, handleExportToExcel} = props;
    return <div>
        {!isAuth && <Redirect to={'/login'}/>}
            <div>

                <div className="content-header b-b">
                    <p className="content-header__subtitle">{t('data.title')}</p>
                    <h2 className="content-header__title">{t('data.title')}</h2>
                    <div className="modal-footer text-left b-t mt-lg">
                        <Button title={t("data.ExportXSL")}
                                className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"
                                onClick={handleExportToExcel}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <MaterialTable
                        title=""
                        columns={props.columns}
                        options={{
                            headerStyle: {
                                position: 'sticky',
                                top: '0',
                                minHeight: '2em'
                            },
                            padding: 'dense',
                            pageSizeOptions: [25, 50, 75,100],
                            pageSize: 100,
                            columnsButton: true,
                        }}
                        data={props.data}
                    />
                </div>
            </div>
    </div>
};


export default Data