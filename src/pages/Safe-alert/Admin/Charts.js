import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardTitle } from "reactstrap";

export default function Charts({options, series}){
    return(
        <React.Fragment>
            <Card>
                <CardBody>
                  <CardTitle className="mb-3">Alertes </CardTitle>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={280}
                    className="apex-charts"
                  />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}