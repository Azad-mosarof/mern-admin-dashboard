import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "../state/api";

function OverviewChart({ isDashboard = false, view }) {

  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();

  console.log(data)

  return (
    <div>OverviewChart</div>
  )
}

export default OverviewChart