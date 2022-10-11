import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function CardTravelPackage({ item }) {
    const { banner, tourCode, tourCaption, tourTitle, link } = item

    return (
        <Card className="mb-4">
            <CardMedia component="img" height="140" image={banner} alt={tourCode} />
            <CardContent className="text-center p-3">
                <Typography variant="caption" color="text.secondary">
                    {tourCaption}
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    className="mt-2 mb-2"
                    sx={{ minHeight: "40px", lineHeight: "1.2" }}
                >
                    {tourTitle}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {tourCode}
                </Typography>
            </CardContent>
            <CardActions className="pb-3">
                <Button variant="contained" size="small" className="mx-auto">
                    <a
                        className="text-decoration-none text-white"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Learn More
                    </a>
                </Button>
            </CardActions>
        </Card>
    )
}
