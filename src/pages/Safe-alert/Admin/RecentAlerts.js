import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function RecentAlerts({recentAlertsData}){
    return(
        <React.Fragment>
            
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Recentes Alertes</h4>

                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        {
                          (recentAlertsData || []).map((item, index) => (
                            <tr key={index}>
                              <td>
                                <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">{item.type} {item.localisation.quartier}</Link></h5>
                              </td>
                              <td>
                                <div>{item.attribuee?.nom}</div>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  {
                                    item.intervenants.map((avatarImg, inx) => (
                                      <div className="avatar-group-item" key={inx}>
                                        {
                                          avatarImg.src ?
                                            <Link to="#" className="d-inline-block">
                                              <img src={avatarImg.src} alt="" className="rounded-circle avatar-xs" />
                                            </Link>
                                            :
                                            <div className="avatar-xs">
                                              <span className={`avatar-title rounded-circle ${avatarImg.bgColor} text-white font-size-16`}>
                                                {avatarImg.avatarTitle}
                                              </span>
                                            </div>
                                        }
                                      </div>
                                    ))
                                  }
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
        </React.Fragment>
    )
}