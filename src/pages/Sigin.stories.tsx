import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Sigin } from './Sigin'

export default {
  title: 'Pages/Sigin',
  component: Sigin,
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'diogo@desdiogo.com')
    userEvent.type(canvas.getByPlaceholderText('***********'), '123456')
    userEvent.click(canvas.getByRole('button'))

    waitFor(() => expect(canvas.getByText('Login realizado!')).tobeInTheDocument())
  }
}