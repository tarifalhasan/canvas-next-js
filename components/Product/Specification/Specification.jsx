import { Button } from '@material-tailwind/react';
import { BsPlus } from 'react-icons/bs';
import { Input } from '@material-tailwind/react';
import { ImBin } from 'react-icons/im';
const Specification = ({
  setIsOpenSpecifations,
  isOpenSpecifations,
  inputSpecificationValues,
  handleSpecificationInputChange,
  handleAddSpecification,
  specification,
  handleDeleteSpecification,
}) => {
  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <h4 className="text-zing-800 text-base font-semibold leading-normal">
          Specification
        </h4>
        <Button
          variant="text"
          className="flex text-primary text-xs font-medium uppercase items-center gap-1"
          onClick={() => setIsOpenSpecifations(!isOpenSpecifations)}
        >
          <BsPlus className="h-5 w-5" /> Add specification
        </Button>
      </div>
      {isOpenSpecifations && (
        <div className="py-2">
          <div className="gap-3 flex w-full">
            <div className="basis-[45%]">
              <Input
                color="teal"
                className="w-full placeholder:text-muted"
                label="Specification Name"
                name="specificationName"
                value={inputSpecificationValues?.specificationName}
                onChange={handleSpecificationInputChange}
              />
            </div>
            <div className="basis-[45%]">
              <Input
                color="teal"
                className="w-full placeholder:text-muted"
                label="Description"
                name="description"
                value={inputSpecificationValues?.description}
                onChange={handleSpecificationInputChange}
              />
            </div>
            <Button
              onClick={handleAddSpecification}
              variant="gradient"
              className=""
            >
              add
            </Button>
          </div>
          {/* mapping data */}
          <div>
            {specification?.map((spec, index) => (
              <div key={index} className="py-3 gap-3 flex w-full">
                <div className="basis-[45%] input">
                  {spec.specificationName}
                </div>
                <div className="basis-[45%] input">{spec.description}</div>
                <button
                  className="basis-[6%] input grid place-items-center"
                  onClick={() => handleDeleteSpecification(index)}
                >
                  <ImBin />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Specification;
