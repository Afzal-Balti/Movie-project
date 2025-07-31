import { Flex, Skeleton, Space } from "antd";

const SkeletonCard: React.FC = () => {
  return (
    <Flex gap="middle" vertical>
      <Space>
        <Skeleton.Node style={{ width: 2000, height: 2000 }} />
      </Space>
    </Flex>
  );
};

export default SkeletonCard;
