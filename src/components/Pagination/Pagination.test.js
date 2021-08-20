import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination component', () => {
  const mockSetPageNumber = jest.fn();

  const createWrapper = (extraProps = {}) => {
    return render(
      <Pagination
        pageNumber={1}
        setPageNumber={mockSetPageNumber}
        totalPages={10}
        {...extraProps}
      />
    );
  };

  it("should render four buttons; 'First', 'Prev', 'Next', and 'Last'", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('First')).toBeInTheDocument();
    expect(wrapper.getByText('Prev')).toBeInTheDocument();
    expect(wrapper.getByText('Next')).toBeInTheDocument();
    expect(wrapper.getByText('Last')).toBeInTheDocument();
  });

  it("should initially render with the 'First' button being selected", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('First')).toHaveClass('selected');
  });

  it("should initially render with the 'Prev' button being disabled", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Prev')).toBeDisabled();
  });

  it("should call the setPageNumber function with the next page number when the 'Next' button is clicked", () => {
    const wrapper = createWrapper();
    userEvent.click(wrapper.getByText('Next'));
    expect(mockSetPageNumber).toHaveBeenCalledWith(2);
  });

  it("should call the setPageNumber function with the last page number when the 'Last' button is clicked", () => {
    const wrapper = createWrapper();
    userEvent.click(wrapper.getByText('Last'));
    expect(mockSetPageNumber).toHaveBeenCalledWith(10);
  });

  it("should enable the 'Prev' button after the user moves past the first page", () => {
    const wrapper = createWrapper({ pageNumber: 2 });
    expect(wrapper.getByText('Prev')).not.toBeDisabled();
  });

  it("should call the setPageNumber function with the previous page when the 'Prev' button is clicked and the user is not on the first page", () => {
    const wrapper = createWrapper({ pageNumber: 2 });
    userEvent.click(wrapper.getByText('Prev'));
    expect(mockSetPageNumber).toHaveBeenCalledWith(1);
  });

  it("should call the setPageNumber function with the first page when the 'First' button is clicked and the user is not on the first page", () => {
    const wrapper = createWrapper({ pageNumber: 2 });
    userEvent.click(wrapper.getByText('First'));
    expect(mockSetPageNumber).toHaveBeenCalledWith(1);
  });
});
