import React from 'react'
import Pastel from './Pastel'
import { Container, Card, CardContent, Typography } from '@material-ui/core'

export default function PastelDemo() {
    return (
        <div>
            <Container>
                <Card>
                    <CardContent>
                    <Typography variant="h4" gutterBottom>
                            Auto colored pastels
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            The colors will stay the same for a specific label ex, "hello" will always result in the same color!
                        </Typography>
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
                            The colors will stay the same for a specific label ex, "hello" will always result in the same color!
                        </Typography>
                        <Pastel label="Hello!" color="red" />
                        <Pastel label="Goodbye!" color="green" />
                        <Pastel label="Small size chip" color="amber" size="small" />
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}