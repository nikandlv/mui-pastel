import React from 'react'
import Pastel from './Pastel'
import { Container, Card, CardContent, Typography, Grid } from '@material-ui/core'

export default function PastelDemo() {
    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={12} sm={10} md={5} lg={4}>
            <br /><br /><br />
                <Card>
                    <CardContent>
                    <Typography variant="h4" gutterBottom>
                            Auto colored pastels
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            The colors will stay the same for a specific label ex, "hello" will always result in the same color!
                        </Typography>
                        <br />
                        <Pastel label="Hello!" />
                        <Pastel label="Goodbye!" />
                        <Pastel label="Small size chip" size="small" />
                        <Pastel label="Medium!" size="medium"/>
                        <Pastel label="Default size"/>
                        <Pastel label="Admin"/>
                        <Pastel label="User"/>
                        <Pastel label="Permission"/>
                    </CardContent>
                </Card>
                <br />
                <Card>
                    <CardContent>
                    <Typography variant="h4" gutterBottom>
                            One colored pastels
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            You can choose which color you want by passing the following props
                        </Typography>
                        <Pastel label='color="amber"' color="amber" />
                        <br /><br />
                        <Pastel label="lightBlue" color="lightBlue" />
                        <Pastel label="green" color="green" />
                        <Pastel label="red" color="red" />
                        <Pastel label="blue" color="blue" />
                        <Pastel label="amber" color="amber" />
                        <Pastel label="lime" color="lime" />
                        <Pastel label="orange" color="orange" />
                        <Pastel label="purple" color="purple" />
                        <Pastel label="teal" color="teal" />
                        <Pastel label="pink" color="pink" />
                        <Pastel label="indigo" color="indigo" />
                        <Pastel label="deepOrange" color="deepOrange" />
                        <Pastel label="deepPurple" color="deepPurple" />
                        <Pastel label="yellow" color="yellow" />
                        <Pastel label="lightGreen" color="lightGreen" />
                        <Pastel label="default" color="default" />
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </div>
    )
}