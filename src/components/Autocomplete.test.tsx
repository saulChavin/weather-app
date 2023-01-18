import AutoComplete from './Autocomplete'
import { screen, render } from '@testing-library/react'
import { userEvent } from '../utils/test-utils'
import { it, describe, expect } from 'vitest'

describe('Autocomplete tests', () => {
  it('is rendered with placeholder', async () => {
    render(<AutoComplete elements={[]} />)
    expect(screen.getByPlaceholderText('Buscar')).toBeDefined()
  })

  it('show the elements list when is focused', async () => {
    render(<AutoComplete elements={[]} />)
    await userEvent.click(screen.getByPlaceholderText('Buscar'));
    expect(screen.getByTestId('ac-container').className).toContain('h-80')
  })
})