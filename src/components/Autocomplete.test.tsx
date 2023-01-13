import AutoComplete from './Autocomplete'
import { render, screen } from '../utils/test-utils'

it('uses flexbox in app header', async () => {
  render(<AutoComplete elements={[]} />)
  const element = screen.getByRole('input')
  expect(element.attributes).toContain('id')
})

