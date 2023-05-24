import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mercadoLivreTvSamsungLed from './mocks/productsMock';


describe('Tests if the application is rendered correctly', () => {

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  })

  it('Tests if static elements render on the page', () => {
    render(<App />);
    const SELECT_WEB_COLUMN = screen.getByTestId("web-column-filter");
    const SELECT_CATEGORY_COLUMN = screen.getByTestId("category-column-filter");
    const INPUT_VALUE = screen.getByTestId('value-filter');
    const BTN_FILTER = screen.getByTestId('button-filter');

    expect(SELECT_WEB_COLUMN).toBeInTheDocument();
    expect(SELECT_CATEGORY_COLUMN).toBeInTheDocument();
    expect(INPUT_VALUE).toBeInTheDocument();
    expect(BTN_FILTER).toBeInTheDocument();
  });

  it('Test if the free market and categories select work', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mercadoLivreTvSamsungLed)
    })

      render(<App />);

    const SELECT_WEB_COLUMN = screen.getByTestId("web-column-filter");
    const SELECT_CATEGORY_COLUMN = screen.getByTestId("category-column-filter");
    const INPUT_VALUE = screen.getByTestId('value-filter');
    const BTN_FILTER = screen.getByTestId('button-filter');

    fireEvent.change(SELECT_WEB_COLUMN, {target: {value: 'Mercado Livre' }});
    fireEvent.change(SELECT_CATEGORY_COLUMN, {target: {value: 'Tv' }});
    
    userEvent.type(INPUT_VALUE, 'Samsung led');

    userEvent.click(BTN_FILTER);

    await waitFor(() => {
      expect( screen.getAllByTestId('product-card')).toHaveLength(3);  
    });    
  })
})