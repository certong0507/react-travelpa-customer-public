import React from "react"
import { connect } from "react-redux"
import Button from "@mui/material/Button"
import { HiPlusSm } from "react-icons/hi"

export const ButtonNewChild = ({ addChild }) => {
    return (
        <div>
            <Button
                disableRipple
                disableElevation
                style={{ backgroundColor: "transparent" }}
                color="primary"
                variant="text"
                size="small"
                onClick={addChild}
            >
                <div className="d-flex align-items-center">
                    <HiPlusSm
                        size={"1.3em"}
                        style={{
                            color: "#2a4a4b",
                        }}
                    />
                    <div>Add child</div>
                </div>
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNewChild)
